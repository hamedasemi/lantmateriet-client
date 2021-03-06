import { } from '../../node_modules/@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-style">
  <template>
    <style>
      * {
        box-sizing: border-box;
      }
      ::selection{
          background-color: var(--accent-color-light);
      }
      body, p, h1, h2, h3, h4, h5, h6{
        margin: 0;
      }

      .leaflet-touch .leaflet-bar {
        border: 0;
      }

      .leaflet-control-zoom-in, .leaflet-control-zoom-out, .leaflet-bar a.leaflet-disabled {
        border-radius: .4rem;
        -webkit-tap-highlight-color: transparent;
        background: white;
        color: var(--accent-color);
        border: 0;
        
      }

      .leaflet-control-zoom-in:hover, .leaflet-control-zoom-out:hover, leaflet-disabled:hover {
        background: white;
        color: var(--accent-color);
        border: 0;
        
      }

      .leaflet-touch .leaflet-bar a:last-child {
        margin-top: 1rem;
        box-shadow: none;
      }

      .leaflet-popup-content-wrapper {
          padding: 1rem;
          border-radius: .6rem;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);