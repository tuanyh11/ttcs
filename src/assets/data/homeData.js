const data = {
  data: {
    page: {
      acf: {
        component: [
          {
            fieldGroupName: "Page_Acf_Component_Banner",
            image: {
              mediaItemUrl:
                "https://klbtheme.com/chakta/wp-content/uploads/2021/01/hero-bg-1.jpg",
            },
            contentBanner: {
              description: null,
              fieldGroupName: "content_banner",
              subTitle: null,
              title1: null,
              title2: null,
            },
          },
          {
            fieldGroupName: "Page_Acf_Component_ImageWithTextCol",
            content: [
              {
                content: "<p>Bánh xe tự động hiện đại Ưu đãi tới 25%</p>\n",
                title: "ƯU ĐÃI LỚN 25%",
                image: {
                  mediaItemUrl: `https://klbtheme.com/chakta/wp-content/uploads/2021/01/of-bg-${
                    Math.floor(Math.random() * 4) + 1
                  }.jpg`,
                },
                button: {
                  titleButton: null,
                },
              },
              {
                content:
                  "<p>BMW i880s Model Xe điều khiển từ xa tốt nhất</p>\n",
                title: "BÁN CHẠY (15%)",
                image: {
                  mediaItemUrl: `https://klbtheme.com/chakta/wp-content/uploads/2021/01/of-bg-${
                    Math.floor(Math.random() * 4) + 1
                  }.jpg`,
                },
                button: {
                  titleButton: null,
                },
              },
              {
                content: "<p>Hobbypark Vòng bi 5x10x4mm Xe RC</p>\n",
                title: "Hàng mới về",
                image: {
                  mediaItemUrl: `https://klbtheme.com/chakta/wp-content/uploads/2021/01/of-bg-${
                    Math.floor(Math.random() * 4) + 1
                  }.jpg`,
                },
                button: {
                  titleButton: null,
                },
              },
              {
                content: "<p>OEM ODM Tùy chỉnh độ chính xác cao CNC</p>\n",
                title: "Ưu đãi lớn 30%",
                image: {
                  mediaItemUrl: `https://klbtheme.com/chakta/wp-content/uploads/2021/01/of-bg-${
                    Math.floor(Math.random() * 4) + 1
                  }.jpg`,
                },
                button: {
                  titleButton: null,
                },
              },
            ],
          },
          {
            fieldGroupName: "Page_Acf_Component_ImageWithText",
            data: "<p>email</p>\n",
            imagePosition: "Background",
            subTitle: "đăng ký bản tin",
            title: "Mọi cập nhật Đăng ký Bản tin của chúng tôi",
            images: [
              {
                image: {
                  mediaItemUrl:
                    "https://klbtheme.com/chakta/wp-content/plugins/chakta-core/elementor/images/newsletter-bg.jpg",
                },
              },
            ],
            button: {
              titleButton: "Đăng Ký Ngay",
            },
          },
          {
            fieldGroupName: "Page_Acf_Component_Quote",
            contentQuote: [
              {
                id: new Date().getTime() * Math.random(),
                rating: 5,
                contentData:
                  "<p>Tôi đã mua bộ phụ kiện ô tô này và tôi rất hài lòng với chất lượng của sản phẩm. Tất cả các phụ kiện đều được làm bằng vật liệu chất lượng cao và rất dễ dàng để lắp đặt. Tôi đặc biệt thích bộ phụ kiện này vì nó giúp tôi giữ xe của mình sạch sẽ và gọn gàng hơn. Tôi sẽ chắc chắn giới thiệu sản phẩm này cho bạn bè của tôi</p>\n",
                name: "Tuấn Lèo",
                position: "Web Designer",
                image: {
                  mediaItemUrl: `https://klbtheme.com/chakta/wp-content/uploads/2021/01/thumb-${
                    Math.floor(Math.random() * 3) + 1
                  }.jpg`,
                },
              },
              {
                id: new Date().getTime() * Math.random(),
                rating: 5,
                contentData:
                  "<p>Tôi đã sử dụng bộ phụ kiện ô tô này trong một thời gian và tôi rất hài lòng với hiệu suất của nó. Tất cả các phụ kiện đều rất chắc chắn và không bị trầy xước hay hỏng hóc sau một thời gian sử dụng. Tôi cũng thích cách thiết kế của bộ phụ kiện này, nó giúp tôi tiết kiệm không gian và giữ xe của tôi sạch sẽ hơn. Tôi sẽ chắc chắn mua lại sản phẩm này nếu cần thiết</p>\n",
                name: "Trần Quân",
                position: "Computer Engineer",
                image: {
                  mediaItemUrl: `https://klbtheme.com/chakta/wp-content/uploads/2021/01/thumb-${
                    Math.floor(Math.random() * 3) + 1
                  }.jpg`,
                },
              },
              {
                id: new Date().getTime() * Math.random(),
                rating: 5,
                contentData:
                  "<p>ôi đã mua bộ phụ kiện ô tô này và tôi rất hài lòng với giá cả và chất lượng của sản phẩm. Tất cả các phụ kiện đều được làm bằng vật liệu chất lượng cao và rất dễ dàng để lắp đặt. Tôi cũng thích cách thiết kế của bộ phụ kiện này, nó giúp tôi tiết kiệm không gian và giữ xe của tôi sạch sẽ hơn. Tôi sẽ chắc chắn giới thiệu sản phẩm này cho bạn bè của tôi vì nó là một giải pháp tuyệt vời cho việc giữ xe của bạn sạch sẽ và gọn gàng.</p>\n",
                name: "Quan Vũ",
                position: "Business Manager",
                image: {
                  mediaItemUrl: `https://klbtheme.com/chakta/wp-content/uploads/2021/01/thumb-${
                    Math.floor(Math.random() * 3) + 1
                  }.jpg`,
                },
              },
              {
                id: new Date().getTime() * Math.random(),
                rating: 5,
                contentData:
                  "<p>Sed ut perspiciatis unde omnis istese us error sit voluptatem accusa oloque laudantium totam aperiam eaqupsa quae ab illo inventore veritatis quasc architecto beatae vitae dicta suntey plicabo enim ipsam volupt</p>\n",
                name: "Thế Tài",
                position: "Designer",
                image: {
                  mediaItemUrl: `https://klbtheme.com/chakta/wp-content/uploads/2021/01/thumb-${
                    Math.floor(Math.random() * 3) + 1
                  }.jpg`,
                },
              },
            ],
          },
        ],
      },
    },
  },
  extensions: {
    debug: [],
    queryAnalyzer: {
      keys: "44fc13e57445f380535fae2cfca42f990021cb59fad6b098f201424d46cae4e2 graphql:Query operation:Homepage list:mediaitem list:page list:variableproduct list:externalproduct list:groupproduct list:simpleproduct list:menu list:menuitem list:tag list:category list:comment list:productcategory list:post cG9zdDoyNDQ= dXNlcjox cG9zdDoyOTI= cG9zdDoyOTU= cG9zdDoyOTc= cG9zdDoyOTk= cG9zdDozMDE= cG9zdDozMDY= cG9zdDo5Ng== cG9zdDoxMDA= cG9zdDo5OA==",
      keysLength: 431,
      keysCount: 27,
      skippedKeys: "",
      skippedKeysSize: 0,
      skippedKeysCount: 0,
      skippedTypes: [],
    },
  },
};

export default data;
