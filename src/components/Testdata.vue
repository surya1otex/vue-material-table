<template>
  <div>
    <h2> {{ name }} </h2>
    <p> {{ age }} </p>
    <h3>{{ desg }}</h3>
 </div>
</template>

<script>
export default {
    name: 'Testcomponent',
    data: () => ({
        name: 'surya',
        age: '30',
        desg: 'System Analyst'
      })
}
</script>