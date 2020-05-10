<template>
  <div>
    <p>{{getCenterMap().lat}}</p>
    <p>{{getCenterMap().lng}}</p>
    <heat-map
      :points="markers"
      :lat="parseFloat(getCenterMap().lat)"
      :lng="parseFloat(getCenterMap().lng)"
      :width="350"
      :height="350"
    />
  </div>
</template>

<script>
// let latlon = new google.maps.MVCArray();
// response.data.result.forEach(function(coord) {
//   latlon.push(new google.maps.LatLng(coord.lat, coord.lng));
// });
// let x = new google.maps.visualization.HeatmapLayer({
//   data: latlon,
//   map: self.$refs.mymap.$mapObject
// });
import HeatMap from "@/components/HeatMap";
export default {
  components: { HeatMap },
  data: () => ({
    markers: [
      {
        lat: -23.2156331,
        lng: -45.8971717
      },
      {
        lat: -23.2156331,
        lng: -45.8971717
      },
      {
        lat: -23.2156331,
        lng: -45.8971767
      },
      {
        lat: -23.2126331,
        lng: -45.8971717
      },
      {
        lat: -23.2156331,
        lng: -45.8973717
      },
      {
        lat: -23.2156531,
        lng: -45.8971717
      },
      {
        lat: -23.2156331,
        lng: -45.8951717
      }
    ]
  }),
  methods: {
    getCenterMap() {
      return {
        // lat: this.markers[this.markers.length - 1].lat,
        // lng: this.markers[this.markers.length - 1].lng
        lat: -23.2156331,
        lng: -45.8951717
      };
    }
  }
};
</script>
