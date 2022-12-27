// 表单验证规则类型
declare namespace formRules {}

declare namespace IapiType {
  interface Iapi {
    code: number;
  }
  interface IResult<T = any> extends Iapi {
    result: T;
  }
}
