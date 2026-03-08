import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";
import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/maps/world.js";
import "../DashboardAnalytics/jquery-jvectormap.scss";

// const map = React.createRef(null);
const Vectormap = (props) => {
  const mapRef = useRef(null); // Tham chiếu đến thẻ div chứa bản đồ
  const mapInstance = useRef(null); // Lưu trữ instance của bản đồ để thao tác hoặc xóa

  useEffect(() => {
    // Khởi tạo bản đồ
    if (!mapInstance.current) {
      mapInstance.current = new jsVectorMap({
        selector: mapRef.current,
        map: "world",
        backgroundColor: "transparent",
        draggable: true,
        zoomButtons: false,
        regionStyle: {
          initial: {
            stroke: "#9599ad",
            strokeWidth: 0.25,
            fill: "#f3f6f9",
            fillOpacity: 1
          }
        },
        // regionStyle: {
        //   initial: {
        //     fill: "#d1d5db" // Màu xám nhạt (Tailwind gray-300)
        //   },
        //   hover: {
        //     fill: "#405189" // Màu Primary của template
        //   }
        // },
        // Đổ dữ liệu thực tế (Sales, Users...)
        // series: {
        //   regions: [
        //     {
        //       attribute: "fill",
        //       values: { US: "#020202", VN: "#0ab39c" } // Ví dụ: { US: "#020202", VN: "#0ab39c" }
        //     }
        //   ]
        // },
        onRegionTooltipShow(event, tooltip, code) {
          tooltip.text(`Country: ${tooltip.text()} (Code: ${code})`);
        },
        markerStyle: {
          initial: {
            stroke: "#13c56b"
          },
          hover: {
            stroke: "#f11c2e"
          },
          selected: {
            stroke: "#6691e7"
          }
        },
        markersSelectable: true
      });
    }

    // Cleanup: Xóa bản đồ khi component bị unmount để tránh lỗi bộ nhớ
    return () => {
      if (mapInstance.current) {
        // Cách xóa sạch container của jsvectormap
        const container = document.querySelector(".jvm-container");
        if (container) container.remove();
        mapInstance.current = null;
      }
    };
  }, []);
  return (
    <div ref={mapRef} style={{ width: props.width, height: 350 }}>
      {/* <VectorMap
        map={worldMill}
        // zoomOnScroll={false}
        // zoomButtons={false}
        // markersSelectable={true}
        // markerStyle={{
        //   initial: {
        //     fill: "#13c56b"
        //   },
        //   selected: {
        //     fill: "#6691e7"
        //   },
        //   hover: {
        //     fill: "#f11c2e"
        //   }
        // }}
        // labels={{ markers: { render: (marker) => marker } }}
        // labels={{
        //   markers: {
        //     render: function (marker) {
        //       return marker.name;
        //     }
        //   }
        // }}
        // backgroundColor="transparent"
        // ref={map}
        mapRef={map}
        containerStyle={{
          width: "100%",
          height: "80%"
        }}
        // regionStyle={{
        //   initial: {
        //     stroke: "#9599ad",
        //     strokeWidth: 0.25,
        //     fill: "#f3f6f9",
        //     fillOpacity: 1
        //   }
        // }}
      /> */}
    </div>
  );
};

Vectormap.propTypes = {
  color: PropTypes.string,
  value: PropTypes.any,
  width: PropTypes.any
};

export default Vectormap;
