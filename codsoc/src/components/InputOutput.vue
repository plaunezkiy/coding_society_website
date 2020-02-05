<template>
<div id='main'>
<div class='navbar'>
      <p><router-link style='text-decoration:none' to="/">Main</router-link>  ➤   Input-Output and basic operations</p>
    </div>
    <table width=100% style='margin-left: 8px' border='0' cellspacing= 5px valign='top' cellpadding='15'>
      <tr>
        <td class='sidebar' valign='top' align='left'>
          <p class='nodes' v-for='section in sections'><router-link style='text-decoration: none' :to='section.url'>{{section.topic}}</router-link></p>
        </td>

        <td class='contents' valign='top'>
          <h1>{{sections[$route.params.id-1].topic}}</h1>
          <hr>
          <p style='padding-top:.5%'>{{sections[$route.params.id-1].legend}}</p>
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
      {topic: "Hello World!", url: '1', legend: "Print 'Hello World!' statement using Python"},
      {topic: "Hypotenuse", url: "2", legend: "Calculate the Hypotenuse of a right angled triangle using two other sides"},
      {topic: "3", url: "3", legend: ""},
      {topic: "4", url: "4", legend: ""},
      {topic: "5", url: "5", legend: ""},
      {topic: "6", url: "6", legend: ""},
      {topic: "7", url: "7", legend: ""},
      {topic: "8", url: "8", legend: ""},
      {topic: "9", url: "9", legend: ""},
      {topic: "10", url: "10", legend: ""},
    ],
	header: 'Input-Output',
	text: 'Input-Output operations are very simple in python 3'
	}
	}
}
</script>
