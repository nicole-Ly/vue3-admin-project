<template>
  <el-form
    ref="formRef"
    :rules="rules"
    :model="ruleForm"
    label-width="120px"
    class="demo-dynamic"
  >
    <el-form-item
      label="Activity name"
      prop="name"
    >
      <el-input v-model="ruleForm.account" />
    </el-form-item>
    <el-form-item
      label="Confirm"
      prop="checkPass"
    >
      <el-input
        v-model="ruleForm.pwd"
        type="password"
        autocomplete="off"
      />
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        @click="submitForm()"
      >
        登录
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import type { IElForm } from '@/types/element-plus'
import { useRouter } from 'vue-router'

import { reactive, ref } from 'vue'
const formRef = ref<IElForm>()
const ruleForm = reactive({
  account: '',
  pwd: ''
})
const rules = reactive({
  account: [
    { required: true, message: '请输入账号', trigger: 'change' }
  ],
  pwd: [
    { required: true, message: '请输入密码', trigger: 'change' }
  ]
})
const router = useRouter()
const submitForm = async () => {
  // 表单验证
  const valid = await formRef.value?.validate()
  if (!valid) {
    return false
  }
  router.replace('/')
}
</script>
