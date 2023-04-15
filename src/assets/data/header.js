const headerData = {
  data: {
    menus: {
      edges: [
        {
          node: {
            databaseId: 222,
            id: "dGVybToyMjI=",
            name: "Menu primary",
            menuItems: {
              nodes: [
                {
                  databaseId: 260,
                  id: "cG9zdDoyNjA=",
                  label: "Trang Chủ",
                  path: 'home',
                  childItems: {
                    edges: [],
                  },
                },
                {
                  databaseId: 262,
                  id: "cG9zdDoyNjI=",
                  label: "Giới Thiệu",
                  path: 'about',
                  childItems: {
                    edges: [],
                  },
                },
                {
                  databaseId: 261,
                  id: "cG9zdDoyNjE=",
                  label: "Cửa Hàng",
                  path: 'shop',
                  childItems: {
                    edges: [
                      {
                        node: {
                          id: "cG9zdDoyODI=",
                          label: "Giỏ Hàng",
                          path: 'cart'
                        },
                      },
                    ],
                  },
                },
                {
                  databaseId: 259,
                  id: "cG9zdDoyNTk=",
                  label: "Danh Mục",
                  path: 'categories',
                  childItems: {
                    edges: [],
                  },
                },
                // {
                //   databaseId: 258,
                //   id: "cG9zdDoyNTg=",
                //   label: "Blog",
                //   path: 'blog',
                //   childItems: {
                //     edges: [],
                //   },
                // },
                {
                  databaseId: 257,
                  id: "cG9zdDoyNTc=",
                  label: "Liên Hệ",
                  path: 'contact-us',
                  childItems: {
                    edges: [],
                  },
                },
              ],
            },
          },
        },
      ],
    },
  },
  extensions: {
    debug: [],
    queryAnalyzer: {
      keys: "0aad2730d639dbfbb6a49d94e95d5ffee849cc572d8aa0ac2dac0077d3abb368 graphql:Query operation:HeaderMenu list:menu list:menuitem list:tag list:category list:comment list:productcategory list:post list:page list:mediaitem dGVybToyMjI= cG9zdDoyNjA= cG9zdDoyNjI= cG9zdDoyNjE= cG9zdDoyODI= cG9zdDoyNTk= cG9zdDoyNTg= cG9zdDoyNTc= dXNlcjox",
      keysLength: 328,
      keysCount: 21,
      skippedKeys: "",
      skippedKeysSize: 0,
      skippedKeysCount: 0,
      skippedTypes: [],
    },
  },
};

export default headerData;
