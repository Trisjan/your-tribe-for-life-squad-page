<script>
    import Logo from "./Logo.svelte";
</script>

<nav>
    <Logo/>
    <ul>
        <li>Squad A</li>
        <li>Squad B</li>
    </ul>
</nav>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&display=swap');

    ul {
        font-family: 'Syncopate', sans-serif;
        text-transform: uppercase;
        font-weight: bold;
        list-style-type: none;
        display: flex;
        align-items: center;
    }

    li {
        display: inline;
        padding: 1rem 0;
    }

    nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: #221F29;
        color: #ffffff;
    }
</style>