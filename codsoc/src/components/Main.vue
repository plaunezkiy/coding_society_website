<template>
<div id='main'>
<div class='navbar'>
      <p>Main ➤</p>
    </div>

    <table style='margin-left: 8px' border='0' cellspacing=0 valign='top' cellpadding='15'>
      <tr>

        <td class='sidebar' width=10% valign='top' align='left'>
          <p class='nodes' v-for='section in sections'><router-link style='text-decoration: none' :to='section.url'>{{section.topic}}</router-link></p>
        </td>

        <td class='contents' width=90% align='right' valign='top'>
          <h1>{{header}}</h1>
          <hr>
          <p>{{text}}<h2 id=fire>ПЛЫ</h2></p>
        </td>

      </tr>
    </table>
</div>
</template>

<script>
export default {
  name: 'app',
  data (){
	return {
	sections: [
      {topic: "Input/Output and basic operations", url: '/input-output/1'},
      {topic: "Selection", url: "/selection"},
      {topic: "Loops", url: "/loops"},
      {topic: "Data Types", url: "/data-types"},
      {topic: "Arrays", url: "/arrays"},
      {topic: "Functions", url: "/functions"},
      {topic: "Files", url: "/files"},
      {topic: "Data Analysis", url: "/data-analysis"},
      {topic: "Graphs", url: "/graphs"},
      {topic: "Apps with GUI", url: "/gui"},
    ],
	header: 'Introduction',
	text: 'Welcome to the Python 3 crash course by Nik'
	}
	}
}
</script>
