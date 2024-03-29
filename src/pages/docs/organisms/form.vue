/* eslint-disable vue/multiline-html-element-content-newline */
<template>
  <LayoutDoc
    :title="$t('sections.organisms.form.title')"
  >
    <Sample
      :title="$t('sections.organisms.form.signUp')"
      :snippet="samples.signUp"
    >
      <form
        autocomplete="off"
        class="lg:w-1/2 lg:mx-auto grid gap-4"
      >
        <MjInput
          v-model="model.signUp.username"
          :placeholder="$t('sections.organisms.form.usernamePlaceholder')"
          autocomplete="username"
        >
          {{ $t('sections.organisms.form.username') }}
        </MjInput>

        <MjInput
          v-model="model.signUp.email"
          type="email"
          placeholder="email@address.com"
          autocomplete="email"
        >
          {{ $t('sections.organisms.form.email') }}
        </MjInput>

        <MjSelect
          v-model="model.signUp.department"
          :placeholder="$t('sections.organisms.form.selectDepartment')"
        >
          <option
            v-for="item in $t('examples.items')"
            :key="item.name"
            :value="item.name"
          >
            {{ item.name }}
          </option>

          <template #label>
            {{ $t('sections.organisms.form.department') }}
          </template>
        </MjSelect>

        <MjCheckbox
          v-model="model.signUp.terms"
          name="checkbox"
        >
          <i18n
            path="sections.organisms.form.agreedToTerms"
          >
            <template #terms>
              <MjLink
                class="inline-block"
                color="gray"
                href="#"
                underline
              >
                {{ $t('sections.organisms.form.termsOfUse') }}
              </MjLink>
            </template>

            <template #privacy>
              <MjLink
                class="inline-block"
                color="gray"
                href="#"
                underline
              >
                {{ $t('sections.organisms.form.privacy') }}
              </MjLink>
            </template>
          </i18n>
        </MjCheckbox>

        <MjButton class="mt-4">
          {{ $t('sections.organisms.form.signIn') }}
        </MjButton>

        <i18n
          path="sections.organisms.form.alreadyAUser"
          tag="div"
          class="text-center"
        >
          <template #login>
            <MjLink href="#">
              {{ $t('sections.organisms.form.login') }}
            </MjLink>
          </template>
        </i18n>
      </form>
    </Sample>

    <Sample
      :title="$t('sections.organisms.form.signIn')"
      :snippet="samples.login"
    >
      <form class="lg:w-1/2 lg:mx-auto grid gap-4">
        <MjInput
          v-model="model.signIn.username"
          autocomplete="username"
        >
          {{ $t('sections.organisms.form.username') }}
        </MjInput>

        <MjInput
          v-model="model.signIn.password"
          type="password"
          autocomplete="current-password"
        >
          {{ $t('sections.organisms.form.password') }}
        </MjInput>

        <div class="flex items-center mt-2">
          <div class="flex-1">
            <MjLink href="#">
              {{ $t('sections.organisms.form.forgotPassword') }}
            </MjLink>
          </div>

          <div>
            <MjButton class="ml-4">
              {{ $t('sections.organisms.form.signIn') }}
            </MjButton>
          </div>
        </div>
      </form>
    </Sample>

    <Sample
      :title="$t('sections.organisms.form.vueForm')"
      :snippet="samples.vueForm"
    >
      <vue-form
        class="lg:w-1/2 lg:mx-auto grid gap-4"
        :state="vueFormState"
        @submit.prevent=""
      >
        <validate>
          <MjInput
            v-model="model.vueForm.email"
            name="email"
            autocomplete="email"
            required
            :status="vueFormState.email && vueFormState.email.$touched && vueFormState.email.$invalid ? 'error' : null"
            type="email"
          >
            {{ $t('sections.organisms.form.email') }}

            <template #error>
              <field-messages
                name="email"
                show="$touched || $submitted"
              >
                <div slot="required">
                  {{ $t('sections.organisms.form.emailRequired') }}
                </div>
                <div slot="email">
                  {{ $t('sections.organisms.form.emailValidation') }}
                </div>
              </field-messages>
            </template>
          </MjInput>
        </validate>

        <validate>
          <MjInput
            v-model="model.vueForm.password"
            name="password"
            autocomplete="new-password"
            pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
            required
            :status="vueFormState.password && vueFormState.password.$touched && vueFormState.password.$invalid ? 'error' : null"
            type="password"
          >
            {{ $t('sections.organisms.form.password') }}

            <template #error>
              <field-messages
                name="password"
                show="$touched || $submitted"
              >
                <div slot="required">
                  {{ $t('sections.organisms.form.passwordRequired') }}
                </div>
                <div slot="pattern">
                  {{ $t('sections.organisms.form.passwordPattern') }}
                </div>
              </field-messages>
            </template>
          </MjInput>
        </validate>

        <MjButton
          class="mt-2"
          type="submit"
        >
          {{ $t('sections.organisms.form.signUp') }}
        </MjButton>
      </vue-form>
    </Sample>
  </LayoutDoc>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      vueFormState: {},
      model: {
        signUp: {
          username: '',
          email: '',
          department: '',
          terms: false,
        },
        signIn: {
          username: '',
          password: '',
        },
        vueForm: {
          email: '',
          password: '',
        },
      },
      samples: {
        signUp: [
          `<form
  autocomplete="off"
  class="lg:w-1/2 lg:mx-auto grid gap-4"
>
  <MjInput
    v-model="model.signUp.username"
    :placeholder="$t('sections.organisms.form.usernamePlaceholder')"
    autocomplete="username"
  >
    ${this.$t('sections.organisms.form.username')}
  </MjInput>

  <MjInput
    v-model="model.signUp.email"
    type="email"
    placeholder="email@address.com"
    autocomplete="email"
  >
    ${this.$t('sections.organisms.form.email')}
  </MjInput>

  <MjSelect
    v-model="model.signUp.department"
    :placeholder="$t('sections.organisms.form.selectDepartment')"
  >
    <option
      v-for="item in $t('examples.items')"
      :key="item.name"
      :value="item.name"
    >
      {{ item.name }}
    </option>

    <template #label>
      ${this.$t('sections.organisms.form.department')}
    </template>
  </MjSelect>

  <MjCheckbox
    v-model="model.signUp.terms"
    name="checkbox"
  >
    <i18n
      path="sections.organisms.form.agreedToTerms"
    >
      <template #terms>
        <MjLink
          href="#"
          color="gray"
          underline
        >${this.$t('sections.organisms.form.termsOfUse')}</MjLink>
      </template>

      <template #privacy>
        <MjLink
          href="#"
          color="gray"
          underline
        >${this.$t('sections.organisms.form.privacy')}</MjLink>
      </template>
    </i18n>
  </MjCheckbox>

  <MjButton class="mt-4">
    ${this.$t('sections.organisms.form.signIn')}
  </MjButton>

  <i18n
    path="sections.organisms.form.alreadyAUser"
    tag="div"
    class="text-center"
  >
    <template #login>
      <MjLink href="#">
        ${this.$t('sections.organisms.form.login')}
      </MjLink>
    </template>
  </i18n>
</form>`,
        ],
        login: [
          `<form class="lg:w-1/2 lg:mx-auto grid gap-4">
  <MjInput
    v-model="model.signIn.username"
    autocomplete="username"
  >
    ${this.$t('sections.organisms.form.username')}
  </MjInput>

  <MjInput
    v-model="model.signIn.password"
    autocomplete="current-password"
    type="password"
  >
    ${this.$t('sections.organisms.form.password')}
  </MjInput>

  <div class="flex items-center mt-2">
    <div class="flex-1">
      <MjLink href="#">
        ${this.$t('sections.organisms.form.forgotPassword')}
      </MjLink>
    </div>

    <div>
      <MjButton class="ml-4">
        ${this.$t('sections.organisms.form.signIn')}
      </MjButton>
    </div>
  </div>
</form>`,
        ],
        vueForm: [
          `<vue-form
  class="lg:w-1/2 lg:mx-auto grid gap-4"
  :state="vueFormState"
  @submit.prevent=""
>
  <validate>
    <MjInput
      v-model="model.vueForm.email"
      autocomplete="email"
      name="email"
      type="email"
      required
    >
      ${this.$t('sections.organisms.form.email')}

      <template #error>
        <field-messages
          name="email"
          show="$touched || $submitted"
        >
          <div slot="required">
            ${this.$t('sections.organisms.form.emailRequired')}
          </div>
          <div slot="email">
            ${this.$t('sections.organisms.form.emailValidation')}
          </div>
        </field-messages>
      </template>
    </MjInput>
  </validate>

  <validate>
    <MjInput
      v-model="model.vueForm.password"
      autocomplete="new-password"
      name="password"
      type="password"
      required
      pattern="(?=^.{8,}$)((?=.*d)|(?=.*W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
    >
      ${this.$t('sections.organisms.form.password')}

      <template #error>
        <field-messages
          name="password"
          show="$touched || $submitted"
        >
          <div slot="required">
            ${this.$t('sections.organisms.form.passwordRequired')}
          </div>
          <div slot="pattern">
            ${this.$t('sections.organisms.form.passwordPattern')}
          </div>
        </field-messages>
      </template>
    </MjInput>
  </validate>

  <MjButton
    class="mt-2"
    type="submit"
  >
    ${this.$t('sections.organisms.form.signUp')}
  </MjButton>
</vue-form>`,
        ],
      },
    };
  },
});
</script>
