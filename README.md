Toto je upravená stránka https://maps.sopsr.sk s pridanými gis vrstvami z .geojson súborov.

# How To

Converting .shp files to .geojson files:
```
for file in *.shp; do
  ogr2ogr -t_srs EPSG:3857 -f GeoJSON "${file%.shp}.geojson" "$file"
done
```