
export class FakeValueService  {


  getValue(){
    return 'fake-value';
  }

  setValue(value:string){}

  getPromiseValue(){
    return Promise.resolve('promise fake-value');
  }

}
