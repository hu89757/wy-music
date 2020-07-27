import React, { useState } from "react";
import { Carousel, WingBlank } from "antd-mobile";

function Index() {
  const [data, setData] = useState<any[]>([
    "AiyWuByWklrrUDlFignR",
    "TekJlZRVCjLFexlOCuWn",
    "IJOtIlfsYdTyaDTRVrLI",
  ]);

  let [imgHeight, setHeight] = useState<number | string>(176);

  return (
    <div className="Index">
      <WingBlank>
        <Carousel autoplay={false} infinite>
          {data.map((val) => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{
                display: "inline-block",
                width: "100%",
                height: imgHeight,
              }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: "100%", verticalAlign: "top" }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event("resize"));
                  setHeight((imgHeight = "auto"));
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    </div>
  );
}

export default Index;
