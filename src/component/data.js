 const data =[{
  "name": "root",
  "type": "folder",
  "icon": "folder",
  "children": [
    {
      "name": "src",
      "type": "folder",
      "icon": "folder",
      "children": [
        {
          "name": "components",
          "type": "folder",
          "icon": "folder",
          "children": [
            {
              "name": "Header",
              "type": "folder",
              "icon": "folder",
              "children": [
                {
                  "name": "Header.js",
                  "type": "file",
                  "icon": "file-code"
                },
                {
                  "name": "Header.css",
                  "type": "file",
                  "icon": "file-code"
                }
              ]
            },
            {
              "name": "Footer",
              "type": "folder",
              "icon": "folder",
              "children": [
                {
                  "name": "Footer.js",
                  "type": "file",
                  "icon": "file-code"
                },
                {
                  "name": "Footer.css",
                  "type": "file",
                  "icon": "file-code"
                }
              ]
            }
          ]
        },
        {
          "name": "pages",
          "type": "folder",
          "icon": "folder",
          "children": [
            {
              "name": "Home.js",
              "type": "file",
              "icon": "file-code"
            },
            {
              "name": "About.js",
              "type": "file",
              "icon": "file-code"
            }
          ]
        }
      ]
    },
    {
      "name": "public",
      "type": "folder",
      "icon": "folder",
      "children": [
        {
          "name": "images",
          "type": "folder",
          "icon": "folder",
          "children": [
            {
              "name": "logo.png",
              "type": "file",
              "icon": "file-image"
            },
            {
              "name": "background.jpg",
              "type": "file",
              "icon": "file-image"
            }
          ]
        },
        {
          "name": "index.html",
          "type": "file",
          "icon": "file-code"
        },
        {
          "name": "favicon.ico",
          "type": "file",
          "icon": "file-image"
        }
      ]
    }
  ]
}  
]

  const idAccessor = (node) => node.name;

export { data, idAccessor };

