<script setup>
import { ref } from "vue";
import Timeline from 'primevue/timeline';
import Card from 'primevue/card';

const events = ref([
    { title: "Born", text: "I was born in Dresden on the 17th of April 1998.", location: "Dresden", date: "17/04/1998" },
    { title: "Elementary School", text: "Up until 4th grade, I was in my local elementary school in a smaller village near Dresden.", location: "Dresden", date: "2004-2009" },
    { title: "Ev. Kreuzgymnasium", text: "Starting 5th grade I changed schools to Ev. Kreuzgymnasium Dresden. I stayed there until I completed my Abitur in 2017.", location: "Dresden", date: "2009-2017" },
    { title: "Voluntary social year", text: "After completing my Abitur I moved to Mannheim. There I worked for evangelische Pflegedienste Mannheim, with whom I did my voluntary social year. I worked in the day care center.", location: "Mannheim", date: "2017-2018" },
    { title: "Studying", text: "I was drawn to Bayreuth, where I studied applied computer science for six semesters. However, I ended up dropping out because I didn't find the study program practical enough.", location: "Bayreuth", date: "2018-2021" },
    { title: "Production worker", text: "To bridge the gap for a year, I worked in torque converter production at my future employer ZF. This allowed me to gain my first impressions and get to know the company.", location: "Schweinfurt", date: "2021-2022" },
    { title: "IT trainee", text: "I trained at ZF as an IT specialist in the field of digital networking from September 2022 to July 2025. I managed to finish with exceptional results.", location: "Schweinfurt", date: "2022-2025" },
    { title: "IT specialist", text: "I'm now working as an IT specialist at ZF Aftermarket. My team and I are responsible for digitalization at the site.", location: "Schweinfurt", date: "2025-present" }
]);

</script>

<template>
    <Timeline :value="events" align="alternate">
        <template #marker>
            <div class="marker" />
        </template>
        <template #content="slotProps">
            <Card>
                <template #title>
                    {{ slotProps.item.title }}
                </template>
                <template #subtitle>
                    {{ slotProps.item.location }}, {{ slotProps.item.date }}
                </template>
                <template #content>
                    {{ slotProps.item.text }}
                </template>
            </Card>
        </template>
    </Timeline>
</template>

<style scoped>
.marker {
    width: 1rem;
    height: 1rem;
    border: 0.12rem solid gray;
    padding: 0.12rem;
    border-radius: calc(infinity * 1px);
    background-color: var(--vp-c-brand-1);
    background-clip: content-box;
}

.dark {
    .marker {
        border-color: white;
    }
}
</style>