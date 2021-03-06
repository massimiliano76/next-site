import React from 'react';
import Link from 'next/link';
import { useAmp } from 'next/amp';
import { frontSortOrder, mapping } from '../../showcase-manifest';

// length should be odd number
const DATA = frontSortOrder.slice(0, 7).map(id => {
  return mapping[id];
});

const imgWidth = 330;
const imgHeight = 185;
const margin = 30;

export default () => {
  const isAmp = useAmp();
  const Img = props =>
    React.createElement(isAmp ? 'amp-img' : 'img', {
      ...props,
      ...(isAmp
        ? {
            className: undefined
          }
        : {
            height: undefined,
            width: undefined
          })
    });
  return (
    <>
      <div className="showcase-container tablet">
        <style jsx>{`
          .showcase-container.tablet {
            position: relative;
            margin: 3rem 0 -2rem;
            pointer-events: none;
            line-height: 0;
          }
          .slides {
            display: flex;
            flex-wrap: wrap;
          }
          .slide {
            padding: 0.5rem;
            flex: 1 1 33.33%;
          }
          .tablet :global(img),
          .tablet :global(amp-img) {
            max-width: 100%;
            border-radius: 5px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
          }
          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            z-index: 2;
            bottom: -1rem;
            background: linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0) 30%,
              #f6f6f6 85%
            );
          }
          @media screen and (max-width: 640px) {
            .slide {
              flex: 1 1 50%;
            }
          }
          @media screen and (min-width: 960px) {
            .showcase-container.tablet {
              display: none;
            }
          }
        `}</style>
        <div className="overlay" />
        <div className="slides">
          {DATA.slice(0, DATA.length - 1).map((item, i) => {
            return (
              <div className="slide" key={`thumbnail-${i}`}>
                <Img
                  src={item.src.replace('/showcases/', '/showcase-thumbnails/')}
                  alt={`Showcase ${i}`}
                  height={imgHeight}
                  width={imgWidth}
                  layout="responsive"
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="showcase-container desktop">
        <style jsx>{`
          .showcase-container.desktop {
            display: none;
            margin: 4rem auto 2rem auto;
          }
          .slides {
            display: flex;
            max-width: 100vw;
            margin: 50px 0 0;
          }
          .slides *::selection {
            background-color: transparent;
          }
          .shadow {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
            height: 100%;
            color: white;
            text-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
            background: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.3)
            );
            transition: opacity 0.2s ease;
            opacity: 0;
          }
          .info {
            position: absolute;
            width: 100%;
            bottom: 0;
            padding: 1rem;
            text-align: center;
            color: white;
            background: rgba(0, 0, 0, 0.8);
            transition: opacity 0.6s ease;
            opacity: 0;
          }
          .slide:hover .shadow {
            opacity: 1;
          }
          .slide:hover .info {
            opacity: 1;
          }
          .slide {
            width: ${imgWidth}px;
            height: ${imgHeight}px;
            margin: 0 calc(${50 / DATA.length}vw - ${imgWidth / 2}px);
            border-radius: 7px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08),
              0 5px 12px rgba(0, 0, 0, 0.1);
            transition: all 0.5s ease;
            cursor: pointer;
            overflow: hidden;
            background: white;
          }
          .slide:hover {
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
          }
          .slide:hover :global(img),
          .slide:hover :global(amp-img) {
            opacity: 1;
          }
          .desktop :global(img),
          .desktop :global(amp-img) {
            width: 100%;
            transition: opacity 0.5s ease;
          }
          @media screen and (min-width: 960px) {
            .showcase-container.desktop {
              display: block;
            }
          }
        `}</style>
        <div className="slides">
          {DATA.map((item, i) => {
            let offset = ~~(DATA.length / 2) - i;
            let z = -Math.abs(offset);
            let top = z * (margin + 5);
            return (
              <Link
                key={`showcase-${i}`}
                href={`/showcase/${item.internalUrl}`}
              >
                <div
                  className="slide"
                  style={{
                    zIndex: DATA.length + z,
                    transform: `scale(${1 +
                      Math.sin(z / 9)}) translate3d(${-Math.sin(offset) *
                      30}px, ${top}px, 0)`
                  }}
                >
                  <Img
                    className="no-drag"
                    src={item.src.replace(
                      '/showcases/',
                      '/showcase-thumbnails/'
                    )}
                    alt={item.title}
                    style={{
                      opacity: z === 0 ? 1 : 0.8
                    }}
                    height={imgHeight}
                    width={imgWidth}
                  />
                  <div className="info">
                    <h3 className="f-reset fw4">{item.title}</h3>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
