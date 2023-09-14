<script>
    import Logo from "./Logo.svelte";
</script>

<nav>
    <Logo/>
    <ul>
        <li><a href="#">Squad A</a></li>
        <li><a href="#">Squad B</a></li>
    </ul>
</nav>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&display=swap');

    ul {
        font-family: 'Syncopate', sans-serif;
        text-transform: uppercase;
        font-weight: bold;
        list-style-type: none;
        font-size: 0.8rem;
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

    @media (min-width: 38.75rem) {
        ul {
            font-size: 1.2rem;
        }
    }
</style>