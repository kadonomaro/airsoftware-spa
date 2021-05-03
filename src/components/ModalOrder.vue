<script>
    import FormWrapper from "@/components/FormWrapper";
    export default {
        name: "ModalOrder",
        components: { FormWrapper },
    };
</script>

<template>
    <div class="order">
        <form-wrapper>
            <label class="form__label" aria-label="selected products">
                <select name="order-product" class="form__select input" required>
                    <option value="">Выберите продукт</option>
                    <option value="address-book">Address Book</option>
                    <option value="todo">Todo Application</option>
                    <option value="transport-control">Transport Control</option>
                </select>
                <span class="form__error js-validation-error"></span>
            </label>
            <label class="form__label" aria-label="user name">
                <input
                    type="text"
                    name="order-name"
                    class="form__input input"
                    placeholder="Ваше имя"
                    required
                />
                <span class="form__error js-validation-error"></span>
            </label>
            <label class="form__label" aria-label="user phone">
                <input
                    type="tel"
                    name="order-phone"
                    class="form__input input"
                    placeholder="Ваш телефон"
                    required
                />
                <span class="form__error js-validation-error"></span>
            </label>
            <label class="form__label" aria-label="user email">
                <input
                    type="email"
                    name="order-email"
                    class="form__input input"
                    placeholder="Ваш email"
                    required
                />
                <span class="form__error js-validation-error"></span>
            </label>
            <label class="form__label">
                <input
                    type="checkbox"
                    name="order-agree"
                    class="checkbox visually-hidden"
                    required
                />
                <span class="checkbox-custom"></span>
                <span class="form__policy"
                    >Я согласен на
                    <a class="link" href="/policy">обработку персональных данных</a></span
                >
            </label>
            <button type="submit" class="form__button button">Оставить заявку</button>
        </form-wrapper>
    </div>
</template>

<style lang="scss"></style>
