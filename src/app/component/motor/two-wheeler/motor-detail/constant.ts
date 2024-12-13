export const config = [
    {
      type: 'text',
      label: 'Name',
      name: 'name',
      placeholder: 'Enter your name',
      required: true,
    },
    {
      type: 'select',
      label: 'Country',
      name: 'country',
      options: [{id:1,value:'USA'},{id:2,value: 'Canada'}, {id:3,value:'Australia'}],
      required: true,
    },
    {
      type: 'radio',
      label: 'Gender',
      name: 'gender',
      options: [{id:'M',value:'Male'}, {id:'F',value:'Female'}],
      required: true,
    },
    {
      type: 'checkbox',
      label: 'Hobbies',
      name: 'hobbies',
      options: [{id:1,value:'Reading'},{id:2,value :'Traveling'}, {id:3,value :'Gaming'}],
      required: true,
    },
    {
      type: 'button',
      label: 'Submit',
      event: 'onFormSubmit'
    },
    {
      type: 'button',
      label: 'Cancel',
      event: 'onFormCancel'
    }
  ];
  export const motorconfig = [
    {
      type: 'text',
      label: 'Name',
      name: 'name',
      placeholder: 'Enter your name',
      required: true,
    },
    {
      type: 'select',
      label: 'Country',
      name: 'country',
      options: [{id:1,value:'USA'},{id:2,value: 'Canada'}, {id:3,value:'Australia'}],
      required: true,
    },
    {
      type: 'radio',
      label: 'Gender',
      name: 'gender',
      options: [{id:'M',value:'Male'}, {id:'F',value:'Female'}],
      required: true,
    },
    {
      type: 'checkbox',
      label: 'Hobbies',
      name: 'hobbies',
      options: [{id:1,value:'Reading'},{id:2,value :'Traveling'}, {id:3,value :'Gaming'}],
      required: true,
    },
    {
      type: 'button',
      label: 'Submit',
      event: 'onFormSubmit'
    },
    {
      type: 'button',
      label: 'Cancel',
      event: 'onFormCancel'
    }
  ];


