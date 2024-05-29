// news.js
import React from 'react';

const News = () => {
    return (
        <div className="container px-5 my-5">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bolder mb-0">
            <span className="text-gradient d-inline">お知らせ</span>
          </h1>
        </div>
        <div className="d-flex justify-content-center">
          <div className="container">
            <div className="row">
              {/* <!-- Calendar --> */}
              <div className="col-md-8">
                <iframe
                  src="https://calendar.google.com/calendar/embed?src=66c439168a814ea2deef6db891a3b88464dd4f1fcaac3e8795c14eed12f27827%40group.calendar.google.com&ctz=Asia%2FTokyo"
                  style={{ border: 0 }}
                  width="100%"
                  height="600"
                  frameBorder="0"
                  scrolling="no"
                  title="Google Calendar"
                ></iframe>
              </div>
              <div className="col-md-4">
                {/* <!-- Card 1 --> */}
                <div className="card shadow mb-4">
                  {/* <!-- Card Header - Accordion --> */}
                  <a
                    href="#collapseCardExample1"
                    className="d-block card-header py-3"
                    data-toggle="collapse"
                    role="button"
                    aria-expanded="true"
                    aria-controls="collapseCardExample1"
                  >
                    <h6 className="m-0 big fw-bolder">お知らせ！</h6>
                  </a>
                  {/* <!-- Card Content - Collapse --> */}
                  <div className="collapse show" id="collapseCardExample1">
                    <div className="card-body">
                      <ul>
                        <li>
                          <strong>(2024/05/30)</strong>[4月・5月分]在室報告書と月例報告書の提出日
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <!-- Card 2 --> */}
                <div className="card shadow mb-4">
                  {/* <!-- Card Header - Accordion --> */}
                  <a
                    href="#collapseCardExample2"
                    className="d-block card-header py-3"
                    data-toggle="collapse"
                    role="button"
                    aria-expanded="true"
                    aria-controls="collapseCardExample2"
                  >
                    <h6 className="m-0 big fw-bolder">発表者の順番</h6>
                  </a>
                  {/* <!-- Card Content - Collapse --> */}
                  <div className="collapse show" id="collapseCardExample2">
                    <div className="card-body">
                      <ol>
                        <li>第一：川口優輝</li>
                        <li>第二：近藤光哉</li>
                        <li>第三：曽原直哉</li>
                        <li>第四：吉田知生</li>
                        <li>第五：齋藤健太郎</li>
                        <li>第六：永谷大樹</li>
                        <li>第七：永松汰伽</li>
                        <li>第八：宮崎大誠</li>
                        <li>第九：Ohm</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default News;