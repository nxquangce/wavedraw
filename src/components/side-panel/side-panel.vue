<template>
  <div id="side-panel">
    <div class="panel-row">
      <div class="panel-title">Common parameters</div>
      <div class="panel-box">
        <table>
          <tr>
            <th>Wave height</th>
            <td>
              <input type="range" min="20" max="50" />
            </td>
            <td>
              <input type="number" min="20" max="50" />
            </td>
          </tr>
          <tr>
            <th>Cycle width</th>
            <td>
              <input type="range" min="20" max="50" />
            </td>
            <td>
              <input type="number" min="20" max="50" />
            </td>
          </tr>
          <tr>
            <th>Wave line width</th>
            <td>
              <LineWidthSelect></LineWidthSelect>
            </td>
            <td>
              <input type="number" min="1" max="3" />
            </td>
          </tr>
          <tr>
            <th>Line space</th>
            <td>
              <input type="range" min="10" max="50" />
            </td>
            <td>
              <input type="number" min="10" max="50" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { SidePanelTs } from "./side-panel";
import "./side-panel.scss";
export default class SidePanel extends SidePanelTs {}
</script>