<style>



</style>

<template>

<!-- // <mock-up src="mock-reports.png">
// </mock-up> -->

<div class="row reportsWrapper">
    <div class="col-md-12">
        <div class="col-md-3">
          <p><i class="fa fa-print">Patient List</i>
            <button class="btn btn-primary btn-block">Print</button>
          </p>
        </div>
        <div class="col-md-3">
          <p><i class="fa fa-print">Full Patient History with Meds</i>
            <button class="btn btn-primary btn-block">Print</button>
          </p>
        </div>
        <div class="col-md-3">
          <p>Blank New Patient Form
            <button class="btn btn-primary btn-block">Print</button>
          </p>
        </div>
        <div class="col-md-3">
          <p>Patients Per Doctor
            <button class="btn btn-primary btn-block">Print</button>
          </p>
        </div>
    </div>
</div>

</template>

<script>

import MockUp from '../components/mock-up.vue';

export default {
    components: {
        'mock-up': MockUp
    }
}

</script>
