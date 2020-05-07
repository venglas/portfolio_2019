<template>
    <article class="view view--project" v-bind:style="{marginLeft: margin_left}">
      <ViewHeader text="IG Helper Tool"></ViewHeader>

      <GoBackButton></GoBackButton>

      <article class="section section--project">
        <header class="header">
            IG Helper Tool to narzędzie, które pozwoli Ci łatwiej zarządzać Twoim profilem na portalu instagram oraz zdobyć większą ilość osób, które obserwują Twój profil.
        </header>

        <section class="content">

            <ProjectSlider
                img1="../../static/img/projects/ig-helper-tool/slide1.jpg"
                img2="../../static/img/projects/ig-helper-tool/slide2.jpg"
                img3="../../static/img/projects/ig-helper-tool/slide3.jpg"
                img4="../../static/img/projects/ig-helper-tool/slide4.jpg"
                img5="../../static/img/projects/ig-helper-tool/slide5.jpg"
            >
            </ProjectSlider>

            <div class="content__video">
                <header class="header">
                    Poniej znajduje się krótki film przedstawiający działanie IG Helper Tool. Jest to film demonstracyjny przedstawiający działanie wersji 0.0.3 Szczegóły na temat działania znajdują się ponizej.
                </header>
                
                <iframe width="100%" height="400px" src="https://www.youtube.com/embed/AYSHRQAsCcU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div class="content__description">
                <p class="text">
                    <header class="text__header">
                        IG Helper Tool pomoze Ci w zarządaniu swoim profilem jak i zdobywaniu nowych followersów.
                    </header>
                    

                    <hr>

                    <ul class="description-list">
                        <div class="description-list__title">
                            {{description.list.title}}
                        </div>

                        <li class="description-list__item" v-for="(item, i) in description.list.items" :key="i">
                            <span class="title">{{item.title}}</span> - <span class="description">{{item.description}}</span>
                        </li>
                    </ul>
                </p>
                
                Technologie jakie zostały użyte w projekcie to m.in: 
                <ul class="list">
                    <li class="list__item">
                        <a href="https://www.w3.org/TR/html52/" target="_blank">HTML5</a>
                        <img src="../../assets/img/icons/html5.png" alt="html5 icon" class="img icon">
                    </li>

                    <li class="list__item">
                        <a href="https://sass-lang.com/" target="_blank">SCSS</a>
                        <img src="../../assets/img/icons/sass.png" alt="scss icon" class="img icon">
                    </li>

                    <li class="list__item">
                        <a href="https://www.ecma-international.org/ecma-262/6.0/" target="_blank">ES6</a>
                        <img src="../../assets/img/icons/js.png" alt="javascript icon" class="img icon">
                    </li>

                    <li class="list__item">
                        <a href="https://developer.chrome.com/extensions" target="_blank">Chrome Extension</a>
                        <img src="../../assets/img/icons/chrome.png" alt="Chrome icon" class="img icon">
                    </li>

                    <li class="list__item">
                        <a href="https://webpack.js.org/" target="_blank">Webpack</a>
                        <img src="../../assets/img/icons/webpack.png" alt="Webpack icon" class="img icon">
                    </li>

                    <li class="list__item">
                        <a href="https://babeljs.io/" target="_blank">Babel</a>
                        <img src="../../assets/img/icons/babel.png" alt="Babel icon" class="img icon">
                    </li>

                    <li class="list__item">
                        <a href="https://vuejs.org/" target="_blank">Vue.js</a>
                        <img src="../../assets/img/icons/vue.png" alt="vue icon" class="img icon" />
                    </li>

                    <li class="list__item">
                        <a href="https://cli.vuejs.org/" target="_blank">Vue CLI3 (vuex, vue router)</a>
                        <img src="../../assets/img/icons/vue.png" alt="Vue icon" class="img icon">
                    </li>

                    <li class="list__item">
                        <a href="https://vuetifyjs.com/" target="_blank">Vuetify</a>
                        <img src="../../assets/img/icons/vuetify.png" alt="Vuetify icon" class="img icon">
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
  name: 'margonemMultiBot',
  components: {ViewHeader, ProjectSlider, GoBackButton},
  data: () => {
    return {
        margin_left: '180px',
        
        description: {
            list: {
                title: "Opis funkcji:",
                items: [
                    {title: "Get Followers", description: "Klikając Get Followers na kogoś profilu otwiera listę proponowanych profilów. Obserwując osoby z tej listy zapisują się nam one w dodatku w zakładce 'Get Followers', na podstawie listy tych profilów mozemy je automatycznie odobserwowywać."},
                    {title: "Followed Profiles", description: "Lista profilów, które zaobserwowaliśmy. Bezpośrednio z niej mozemy się przenieść na dany profil klikając na niego. Klikając w ikonkę kosza czyścimy liste."},
                    {title: "Clear Data", description: "Czyścimy całą pamięć aplikacji."},
                    {title: "Unfollow", description: "Automatyczne odobserwowywanie profilów z listy 'Followed Profiles'. Domyślną ilośćią profilów do odobserwowania jest długość listy zaobserwowanych profilów. Funkcja ta posiada losowo generowany czas oczekiwania po kazdym unfollow, czas ten bazuje na ilosci profili do odobserwowania - im jest to większa ilość tym będzie dłuzszy czas oczekiwania, co zmniejsza prawdopodobieństwo blokady odobserwowywania. Profile, które zostały odobserwowane są automatycznie usuwane po akcji unfollow. Rozszerzenie wyśle notyfikację ekranową gdy zakończy swoją pracę. W tym czasie mozesz korzystać z instagrama na innej karcie przeglądarki."},
                    {title: "Saved Profiles", description: "Po wejściu na profil danego uzytkownika obok jego nazwy pojawi się dodatkowy przycisk do zapisania profilu. Zapisuje on dany profil w naszym rozszerzeniu. Jego ilość followersów, osób które obserwuje, ilość dodanych postów oraz zdjęcie profilowe. Z poziomu tej listy mozemy blokować dane profile klikając w rozszerzeniu przycisk 'block'. Z tej listy mozemy równiez przejść bezpośrednio do danego profilu."},
                    {title: "Aktualnie prace trawają nad: ", description: ""},
                    {title: "Clear Profile", description: "funkcja pozwalająca czyścić listę Twoich followersów z nieaktywnych kont, spambotów oraz kont, które nie są atrakcyjne - Konta te to takie które nie przyczyniają się do rozwoju twojego profilu. Czyli prawdopodobieństwo, ze wejdą w jakąś interakcję z Twoim profilem jest znikome (like, komentarze, otworzenie stories, etc)"},
                ]
            }
        }
    }
  },
  mounted(){
    if (window.outerWidth <= 768){
      this.margin_left = 0;
    }
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>    
.text__header {
    padding: 0 0 1.5rem 0;
    font-size: 2rem;
    text-align: center;
}

.description-list {
    &__title {
        padding: 1.5rem 0;
        font-size: 1.7rem;
        font-weight: 600;
    }
    &__item {
        padding: .4rem .3rem .4rem 0;

        .title {
            font-weight: 600;
        }
        .description {
            line-height: 1.5;
        }
    }
}
</style>