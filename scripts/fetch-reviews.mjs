import gplay from 'google-play-scraper';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const APP_ID = 'com.oguzdogdu.budgetpulse';

async function fetchAll() {
  try {
    console.log('Fetching app info from Google Play Store...');

    // 1. Fetch app details (rating, installs, etc.)
    const appInfo = await gplay.app({ appId: APP_ID, lang: 'tr', country: 'tr' });

    const appData = {
      score: appInfo.score ? parseFloat(appInfo.score.toFixed(1)) : null,
      ratings: appInfo.ratings || 0,
      reviews: appInfo.reviews || 0,
      installs: appInfo.installs || '0',
      minInstalls: appInfo.minInstalls || 0,
      maxInstalls: appInfo.maxInstalls || 0,
      fetchedAt: new Date().toISOString()
    };

    const appPath = resolve(__dirname, '..', 'public', 'app-info.json');
    writeFileSync(appPath, JSON.stringify(appData, null, 2), 'utf-8');

    console.log(`\n✅ App info saved to public/app-info.json`);
    console.log(`   Score: ${appData.score}`);
    console.log(`   Installs: ${appData.installs}`);
    console.log(`   Reviews: ${appData.reviews}`);
    console.log(`   Ratings: ${appData.ratings}`);

    // 2. Fetch reviews
    console.log('\nFetching reviews...');
    const reviewsResult = await gplay.reviews({
      appId: APP_ID,
      lang: 'tr',
      country: 'tr',
      sort: gplay.sort.RATING,
      num: 20
    });

    const filtered = reviewsResult.data
      .filter(r => r.score >= 4 && r.text && r.text.trim().length > 30)
      .sort((a, b) => (b.text?.length || 0) - (a.text?.length || 0))
      .slice(0, 6)
      .map(r => ({
        id: r.id,
        userName: r.userName,
        score: r.score,
        text: r.text.trim(),
        date: r.date,
        thumbsUp: r.thumbsUp || 0,
        replyText: r.replyText || null,
        replyDate: r.replyDate || null
      }));

    const reviewsPath = resolve(__dirname, '..', 'public', 'reviews.json');
    writeFileSync(reviewsPath, JSON.stringify(filtered, null, 2), 'utf-8');

    console.log(`✅ ${filtered.length} reviews saved to public/reviews.json`);

    filtered.forEach((r, i) => {
      console.log(`\n${i + 1}. ${r.userName} (⭐${r.score})`);
      console.log(`   "${r.text.substring(0, 80)}..."`);
    });

  } catch (error) {
    console.error('Error:', error.message);
  }
}

fetchAll();
