# World data

## countries.json

The 195 countries you can travel to (UN members plus the Holy See and
Palestine), with capital names and approximate capital coordinates.

## countries-50m.topo.json

Country borders for the globe, drawn as lines and used to find the country
under the pointer.

- Source: Natural Earth 1:50m Cultural Vectors, Admin 0 – Countries, v5.1.2
  (`ne_50m_admin_0_countries`), https://www.naturalearthdata.com/ ,
  file from https://github.com/nvkelso/natural-earth-vector (tag v5.1.2).
- License: public domain (Natural Earth terms of use).
- Built with mapshaper 0.6.121:
  - `id` = `ISO_A2_EH`, else `ISO_A2`, else `ADM0_A3` (France and Norway only
    carry their code in `ISO_A2_EH`); `name` = `NAME`. No other properties.
  - Dissolved by `id`, simplified to 50% (keep-shapes), TopoJSON with
    quantization 1e5, layer `countries`.
- 240 shapes, ~419 KB (~138 KB gzipped).
- Shapes match `countries.json` by ISO alpha-2 code. All 195 countries have a
  shape. The rest (Antarctica, Greenland, Taiwan, Kosovo, Western Sahara,
  Somaliland, Northern Cyprus, overseas territories…) show on the globe with
  "no village" and can't be travelled to. `web/test/borders.test.js` lists them.

Rebuild:

```sh
mapshaper ne_50m_admin_0_countries.geojson \
  -each 'id = (ISO_A2_EH && ISO_A2_EH != "-99") ? ISO_A2_EH : ((ISO_A2 && ISO_A2 != "-99") ? ISO_A2 : ADM0_A3); name = NAME' \
  -filter-fields id,name -dissolve id copy-fields=name \
  -simplify 50% keep-shapes -rename-layers countries \
  -o format=topojson quantization=100000 countries-50m.topo.json
```
