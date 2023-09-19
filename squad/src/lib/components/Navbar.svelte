<script>
    import Logo from "./logo.svelte";
</script>

<nav>
    <a href="/"><Logo/></a>
    <ul>
        <li><a href="/squad-a">Squad A</a></li>
        <li><a href="/">Squad B</a></li>
    </ul>
</nav>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@700&display=swap');

    ul {
        font-family: Syncopate;
        text-transform: uppercase;
        font-weight: bold;
        list-style-type: none;
        font-size: 0.7rem;
        display: none;
    }

    li {
        display: inline;
        padding: 0 1.5rem;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: #221F29;
        color: #ffffff;
        padding: 0 2rem;
    }

    @media (min-width: 31em) {
        nav {
            font-size: 0.8rem;
        }

        ul {
            display: inline;
            font-size: 0.8rem;
        }
    }

    @media (min-width: 45em) {
        nav {
            font-size: 1rem;
        }

        ul {
            font-size: 1rem;
        }
    } 

    @media (min-width: 68em) {
        nav {
            font-size: 1.2rem;
        }

        ul {
            font-size: 1.2rem;
        }
    }
</style>