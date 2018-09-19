<template>
  <div class="games container">
    <h4>Game Information</h4>
    <h5>Fall Schedule</h5>
    <p>*All games take place on Saturday*</p>
    <div>
      <h6>SEPTEMBER</h6>
      <table class="table table-dark">  
        <tr>
          <th>Date</th>
          <th>Teams</th>
          <th>Location</th>
          <th>Times</th>
        </tr>
        <tr>
          <td rowspan="2">9/01</td>
          <td>U1 and U4</td>
          <td>AJ Katzenmaier</td>
          <td>9:30 a.m.</td>
        </tr>
        <tr>
          <td>U3 and U2</td>
          <td>Greenbay</td>
          <td>1:00 p.m.</td>
        </tr>
        <tr>
          <td rowspan="2">9/08</td>
          <td>U5 and U6</td>
          <td>Howard A Yeager</td>
          <td>9:30 a.m.</td>
        </tr>
        <tr>
          <td>U6 and U1</td>
          <td>Marjorie P Hart</td>
          <td>1:00 p.m.</td>
       <tr>
          <td rowspan="2">9/15</td>
          <td>U2 and U4</td>
          <td>North</td>
          <td>9:30 a.m.</td>
        </tr>
        <tr>
          <td>U3 and U5</td>
          <td>AJ Katzenmaier</td>
          <td>1:00 p.m.</td>
        <tr>
          <td rowspan="2">9/22</td>
          <td>U1 and U3</td>
          <td>South</td>
          <td>9:30 a.m.</td>
        </tr>
        <tr>
          <td>U2 and U6</td>
          <td>Howard A Yeager</td>
          <td>1:00 p.m.</td>
        <tr>
          <td>9/29</td>
          <td>U4 and U5</td>
          <td>Greenbay</td>
          <td>9:30 a.m.</td>
        </tr>
        </table>
        <h6>OCTOBER</h6>
        <table class="table table-dark">  
        <tr>
          <th>Dates</th>
          <th>Teams</th>
          <th>Location</th>
          <th>Times</th>
        </tr>
        <tr>
          <td rowspan="2">10/06</td>
          <td>U2 and U5</td>
          <td>Marjorie P Hart</td>
          <td>9:30 a.m.</td>
        </tr>
        <tr>
          <td>U1 and U6</td>
          <td>South</td>
          <td>1:00 p.m.</td>
        </tr>
        <tr>
          <td rowspan="2">10/08</td>
          <td>U3 and U4</td>
          <td>Howard A Yeager</td>
          <td>9:30 a.m.</td>
        </tr>
        <tr>
          <td>U5 and U1</td>
          <td>Greenbay</td>
          <td>1:00 p.m.</td>
       <tr>
          <td rowspan="2">10/20</td>
          <td>U6 and U3</td>
          <td>North</td>
          <td>9:30 a.m.</td>
        </tr>
        <tr>
          <td>U2 and U4</td>
          <td>Marjorie P Hart</td>
          <td>1:00 p.m.</td>
        <tr>
          <td rowspan="2">10/27</td>
          <td>U3 and U1</td>
          <td>AJ Katzenmaier</td>
          <td>9:30 a.m.</td>
        </tr>
        <tr>
          <td>U5 and U6</td>
          <td>Howard A Yeager</td>
          <td>1:00 p.m.</td>
        </tr>
    </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Games"
};
</script>

<style scoped>
.table {
  font-size: 65%;
}
.games {
  color: white;
}
h4 {
  margin-top: 70px;
}
p {
  margin-top: 20px;
  margin-bottom: 30px;
}
h6 {
  text-align: left;
  text-decoration: underline;
}
.table-dark {
  background: rgb(33, 37, 41, 0.7)!important;
}
</style>