<script lang="ts">
  export let name: string = "default";
  export let type: string = "text";
  export let placeholder: string = "default";
  export let value = null;
  export let min = undefined;
  export let max = undefined;
  let error = "";
</script>

<div class="dinput">
  <label>
    <input {type} {name} {placeholder} value={value ?? value} {min} {max} />
    <span>{placeholder}</span>
  </label>
  <p class="error">{error ?? ""}</p>
</div>

<style lang="css">
  .error {
    color: var(--color-error);
  }
  .dinput {
    margin: var(--size-3);
  }
  label {
    position: relative;
  }
  input {
    padding-inline: var(--size-3);
    padding-top: var(--size-6);
    height: var(--size-14);
    line-height: var(--size-4);
    font-size: var(--scale-2);
    width: 100%;
  }
  input::placeholder {
    opacity: 0;
  }
  span {
    position: absolute;
    margin-left: var(--size-2);
    top: 0;
    left: 0;
    transform: translateY(-50%);
    font-size: var(--scale-2);
    transition-duration: 300ms;
    font-size: calc(100% + 0.01vw);
  }

  label:focus-within > span,
  input:not(:placeholder-shown) + span {
    color: var(--color-gray-900);
    font-size: var(--scale-0);
    transform: translateY(-30px);
  }
</style>
