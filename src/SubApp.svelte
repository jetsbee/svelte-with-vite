<script lang="ts">
    import './sub-app.scss';

    export let isShow:boolean = false;
</script>

{#if isShow}
    <main>
        <p>Hello, sub module!</p>
    </main>
{/if}
