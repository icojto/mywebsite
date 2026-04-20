# Manual GIF Guide

## GIFs still best added manually later

Use MP4 instead of GIF whenever possible if the source is very large.

### Two future GIFs you said you still want to add manually
- Add them later after compression/conversion so the site stays downloadable and fast.
- Best target: under 10–15 MB each, or convert to MP4.

## Where to put them in code
The site currently reads project media from `js/app.js` in each project's `media: []` array.

Example:
```js
media: [
  "assets/media/building-stylesheet/Trimsheet1.png",
  "assets/media/building-stylesheet/your-new-motion.mp4"
],
```

## Projects that still make sense for manual motion assets
- Building Stylesheet
- Textured Models
- Kitchen Scene
- Terrain & Wall Materials
- Obituary

## Suggested workflow
1. Convert giant GIF -> MP4 (H.264).
2. Export a still thumbnail image separately.
3. Put the MP4 in the matching `assets/media/<project-id>/` folder.
4. Add the file path to that project's `media: []` array in `js/app.js`.
5. Keep the still image first in the array if you want it to be the card/preview thumbnail.