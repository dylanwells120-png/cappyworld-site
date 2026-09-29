# NASA Blue Marble (web-sized)

Both files come from the same NASA Visible Earth record: *Land Surface,
Shallow Water, and Shaded Topography* (Blue Marble, record 57752).
License: NASA imagery is public domain.

- `blue_marble_2k.jpg` (2048×1024, ~239 KB): phones and light GPUs.
  - URL: https://eoimages.gsfc.nasa.gov/images/imagerecords/57000/57752/land_shallow_topo_2048.jpg
- `blue_marble_4k.jpg` (4096×2048, ~848 KB): desktop globe.
  - Made from https://eoimages.gsfc.nasa.gov/images/imagerecords/57000/57752/land_shallow_topo_8192.tif
    (8192×4096), resized to 4096×2048 and saved as a progressive JPEG, quality 84.

`web/src/world/globe.js` picks the 2k file when the device is coarse or the
GPU can't hold a 4096 texture.
