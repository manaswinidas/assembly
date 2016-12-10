export const themeStyle = `

body { margin: 0; }
* { box-sizing: border-box; }

[class^='docs-'] {
  font-family: "Open Sans";
  color: rgba(0,0,0,.75);
  line-height: 1.5;
}

[class^='docs-heading-title-'] {
  padding-top: 40px;
}

[class^='docs-heading-title-'] a {
  color: rgba(0,0,0,.75);
  margin-bottom: 10px;
  text-decoration: none;
}

[class^='ƒdocs-heading-title-'] a:hover {
  color: rgba(0,0,0,.9);
}

.docs-logo {
  margin-bottom: 20px;
}

.docs-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ebf6fd;
  padding: 20px;
  width: 160px;
  height: 100vh;
}

.docs-nav-item {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
  color: rgba(0,0,0,.5);
  text-decoration: none;
}

.docs-nav-item:hover {
  color: rgba(0,0,0,.75);
}

.docs-container {
  position: relative;
  left: 80px;
  width: calc(100vw - 240px);
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
}

.docs-selector-group {
  margin-bottom: 40px;
  border-bottom: 5px solid rgba(0,0,0,.1);
}

.docs-heading-container {
  margin-bottom: 40px;
}

.docs-heading-title-1 {
  font-size: 20px;
  font-weight: bold;
}

.docs-heading-title-2 {
  font-size: 20px;
  font-weight: bold;
}

.docs-heading-title-3 {
  font-size: 20px;
  font-weight: bold;
}

.docs-heading-title-4 {
  font-size: 16px;
  font-weight: bold;
}

.docs-heading-title-5 {
  font-size: 12px;
  font-weight: bold;
}

.docs-description {
  font-size: 20px;
  color: rgba(0,0,0,.5);
}

.docs-selector-name {
  font-family:Menlo, Bitstream Vera Sans Mono, Monaco, Consolas, monospace;
  font-size: 16px;
  margin-bottom: 10px;
}

.docs-selector-description {
  color: rgba(0,0,0,.5);
  font-size: 16px;
  margin-bottom: 20px;
}

.docs-selector-description a {
  color: #0077cc;
}

.docs-selector-description a:hover {
  color: #3246dc;
}

.docs-group-member {
  font-family:Menlo, Bitstream Vera Sans Mono, Monaco, Consolas, monospace;
  border-radius: 4px;
  padding: 2px 4px;
  display: inline-block;
  margin-right: 5px;
  margin-bottom: 5px;
  background: rgba(0,0,0,.05);
}

`;