import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

await imagemin(process.argv.slice(2), {
  destination: './dst/',
  plugins: [
    imageminWebp({
      quality: 50,
      resize: { width: 900, height: 1200 },
      metadata: 'none',
    })
  ],
});
