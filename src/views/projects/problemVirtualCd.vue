<template>
    <article class="view view--project" v-bind:style="{marginLeft: margin_left}">
      <ViewHeader text="PRO8L3M Virtual CD"></ViewHeader>

      <GoBackButton></GoBackButton>

      <article class="section section--project">
        <header class="header">
            PO8L3M virtual CD jest to projekt inspirowany krąkiem muzycznym "Ground zero" duetu PRO8L3M.
        </header>

        <section class="content">

            <ProjectSlider
                img1="../../static/img/projects/problem-virtual-cd/problem_virtual_cd_2.png"
                img2="../../static/img/projects/problem-virtual-cd/problem_virtual_cd_1.png"
                img3="../../static/img/projects/problem-virtual-cd/slide1.png"
                img4="../../static/img/projects/problem-virtual-cd/slide2.png"
                img5="../../static/img/projects/problem-virtual-cd/slide3.png"
            >
            </ProjectSlider>

            <div class="content__description">
                PO8L3M virtual CD jest to projekt wirtualnej płyty muzycznej, która zawiera 27 utworów wraz z tekstami. <br>
                Technologie jakie zostały użyte w projekcie to m.in: 
                <ul class="list">
                    <li class="list__item">
                        <a href="https://www.w3.org/TR/html52/" target="_blank">HTML5</a>
                        <img src="../../assets/img/icons/html5.png" alt="html5 icon" class="img icon">
                    </li>

                    <li class="list__item">
                        <a href="https://www.ecma-international.org/ecma-262/6.0/" target="_blank">ES6</a>
                        <img src="../../assets/img/icons/js.png" alt="javascript icon" class="img icon">
                    </li>

                    <li class="list__item">
                        <a href="https://sass-lang.com/" target="_blank">SCSS</a>
                        <img src="../../assets/img/icons/sass.png" alt="javascript icon" class="img icon">
                    </li>

                    <li class="list__item">
                        <a href="https://parceljs.org/" target="_blank">Parcel</a>
                        <img src="../../assets/img/icons/parcel.png" alt="javascript icon" class="img icon">
                    </li>
                </ul>
            </div>

        </section>
      </article>
    </article>
</template>

<script>
import ViewHeader from '../../components/ViewHeader';
import ProjectSlider from '../../components/ProjectSlider';
import GoBackButton from '../../components/GoBackButton';

export default {
  name: 'problemVirtualCd',
  components: {ViewHeader, ProjectSlider, GoBackButton},
  data: () => {
    return {
        margin_left: '180px',
    }
  },
  mounted(){
  },

  methods: {
  }
}
</script>