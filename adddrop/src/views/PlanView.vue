<template>
  <header>
    <div class="header-info">
      <h1>Subjects in the study plan</h1>
    </div>
  </header>
  <div class="team">
    <div class="right-team">
      <div>
        <table
          class="table table-info ,table table-bordered border-dark"
          style="width: 35rem; margin-left: 2%"
        >
          <thead class="table-dark">
            <tr>
              <th scope="col">รหัสวิชา</th>
              <th scope="col">ชื่อวิชา</th>
              <th scope="col">กลุ่มเรียน</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">คพ313</th>
              <td>Web Application Development</td>
              <td>1</td>
            </tr>
            <tr>
              <th scope="row">คพ343</th>
              <td>Object Oriented Analysisand Design</td>
              <td>1</td>
            </tr>
            <tr>
              <th scope="row">คพ252</th>
              <td>Mathematics for Computer Science</td>
              <td>1</td>
            </tr>
            <tr>
              <th scope="row">ศท242</th>
              <td>English for Science and Technology 2</td>
              <td>2</td>
            </tr>
            <tr>
              <th scope="row">สต301</th>
              <td>Principles of Statistics</td>
              <td>6</td>
            </tr>
            <tr>
              <th scope="row">ศท013</th>
              <td>Health for Life</td>
              <td>11</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
header {
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2545.jpg?w=2000);
}
.header-info {
  text-align: center;
  width: 650px;
  height: 200px;
  color: black;
}

.team {
  display: flex;
  margin-top: 5px;
  height: 400px;
}



.right-team {
  justify-content: center;
  align-items: center;
}
img {
  width: 100%;
  height: 300px;
}
</style>
