<template>
  <div class="hello">
  <h1>Color Options</h1>
  <cwc-badge>5</cwc-badge>
  <cwc-badge color="gray">1</cwc-badge>
  <cwc-badge color="purple">1</cwc-badge>
  <cwc-badge color="blue">15</cwc-badge>
  <cwc-badge color="orange">2</cwc-badge>
  <cwc-badge color="light-blue">3</cwc-badge>
  <cwc-badge class='app-custom'>23</cwc-badge>

  <h1>Status</h1>
  <cwc-badge status="info">2</cwc-badge>
  <cwc-badge status="success">3</cwc-badge>
  <cwc-badge status="warning">12</cwc-badge>
  <cwc-badge status="danger">15</cwc-badge>

    <h1>Button Demo</h1>

    <h2>Link Demo</h2>
    <cwc-button status="primary">
      <a routerLink="/">home</a>
    </cwc-button>

    <cwc-button>
      <a routerLink="/i18n">this is a long link</a>
    </cwc-button>

    <cwc-button size="small">
      <a routerLink="/i18n">small link</a>
    </cwc-button>

    <h2>Solid buttons</h2>
    <cwc-button status="primary">primary</cwc-button>
    <cwc-button status="success">success</cwc-button>
    <cwc-button status="warning">warning</cwc-button>
    <cwc-button status="danger">danger</cwc-button>
    <cwc-button status="danger" disabled>disabled</cwc-button>

    <h2>Outline buttons</h2>
    <cwc-button action="outline">outline</cwc-button>
    <cwc-button action="outline" status="success">success</cwc-button>
    <cwc-button action="outline" status="warning">warning</cwc-button>
    <cwc-button action="outline" status="danger">danger</cwc-button>
    <cwc-button action="outline" disabled>disabled</cwc-button>

    <h2>Icon buttons</h2>
    <cwc-button action="outline" icon><cwc-icon shape="user"></cwc-icon></cwc-button>
    <cwc-button status="success" icon><cwc-icon shape="user"></cwc-icon></cwc-button>
    <cwc-button status="warning" icon><cwc-icon shape="user"></cwc-icon></cwc-button>
    <cwc-button status="danger" icon><cwc-icon shape="user"></cwc-icon></cwc-button>
    <cwc-button icon disabled><cwc-icon shape="user"></cwc-icon></cwc-button>

    <h2>Block buttons</h2>
    <cwc-button status="primary" block>primary</cwc-button>
    <cwc-button status="success" block>success</cwc-button>

    <h2>Inverse buttons</h2>
    <div class="inverse-btn-container">
      <cwc-button status="inverse">inverse</cwc-button>
      <cwc-button status="inverse" disabled>inverse disabled</cwc-button>
    </div>

    <h2>Flat buttons</h2>
    <cwc-button action="link">flat</cwc-button>
    <cwc-button action="link" disabled>flat disabled</cwc-button>

    <h2>Sizes</h2>
    <cwc-button size="sm" status="primary">primary</cwc-button>
    <cwc-button size="sm" action="outline">outline</cwc-button>
    <cwc-button size="sm" status="success">success</cwc-button>
    <cwc-button size="sm" action="link">link</cwc-button>
    <cwc-button size="sm" action="link" disabled>disabled</cwc-button>

    <h2>Loading</h2>
    <cwc-button :loading-state="myValidateBtnState" @click="validateValidateBtn()" status="info">validate</cwc-button>
    <cwc-button :loading-state="mySubmitBtnState" @click="validateSubmitBtn()" action="outline" status="success">submit</cwc-button>  
  </div>
</template>

<script>
import '@clr/core/badge';
import { ClarityIcons, userIcon } from '@clr/core/icon-shapes';
import { ClrLoadingState } from '@clr/core';

ClarityIcons.addIcon(userIcon);

export default {
  name: 'HelloWorld',
  data: function () {
    return {
      myValidateBtnState: ClrLoadingState.DEFAULT,
      mySubmitBtnState: ClrLoadingState.DEFAULT
    }
  },
  methods: {
    validateValidateBtn: function () {
      this.myValidateBtnState =  ClrLoadingState.LOADING;

      setTimeout(() => {
        this.myValidateBtnState = ClrLoadingState.SUCCESS;
      }, 1500);
    },
    validateSubmitBtn: function () {
      this.mySubmitBtnState = ClrLoadingState.LOADING;

      setTimeout(() => {
        this.mySubmitBtnState = ClrLoadingState.ERROR;
      }, 1500);
    }
  }
}
</script>
<style scoped>
.inverse-btn-container {
  background: black;
}
</style>