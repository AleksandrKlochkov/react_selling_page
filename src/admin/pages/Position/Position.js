import React, {Component} from 'react'
import Table from '../../../components/UI/Table/Table'
import Form from '../../../components/Form/Form'
import Button from '../../../components/UI/Button/Button'
import Input from '../../../components/UI/Input/Input'


class Position extends Component {

    state = {
        formControls: {
            title: {
              value: '',
              type: 'text',
              label: 'Название товара',
              placeholder:'Введите название товара',
              validOptions:{
                valid: false,
                errorMessage: 'Введите название товара'
              },
              touched: false,
              validation: {
                 required: true,
                 minLength: 2
              }         
            },
            price: {
                value: '',
                type: 'number',
                label: 'Цена',
                placeholder:'Введите цену товара',
                validOptions:{
                  valid: false,
                  errorMessage: 'Введите корректную цену'
                },
                touched: false,
                validation: {
                   required: true,
                   minLength: 2
                }         
              },
              count: {
                value: '',
                type: 'number',
                label: 'Количество',
                placeholder:'Введите количество',
                validOptions:{
                  valid: false,
                  errorMessage: 'Введите корректное количество'
                },
                touched: false,
                validation: {
                   required: true,
                   minLength: 2
                }         
              }
        }
    }

    onSubmitHandler(event) {
        console.log(event)
    }

    renderInputs(){
        return Object.keys(this.state.formControls).map((controlName, index)=> {
            const control = this.state.formControls[controlName]
            return(
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.validOptions.valid}
                    placeholder={control.placeholder}
                    name={controlName}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate={!!control.validation}
                    errorMessage={control.validOptions.errorMessage}
                    onChange={event => this.onChangeHandler(event, controlName)
                }
           />
            )
        })
    }

    render() {
        return (
            <div className="position">
                <div className="row">
                    <Form
                        formName={'Добавить товар'}
                        onSubmit={(event)=>this.onSubmitHandler(event)}
                    >
                        {/* {this.props.alertMessage.show ? <Alert type={this.props.alertMessage.type} message={this.props.alertMessage.text}/> : null} */}
                        {this.renderInputs()}
                        <Button className="success" type={'submit'} >Добавить товар</Button>
                    </Form>
                </div>
                <div className="row">
                    <Table />
                </div>
            </div>    
        )
    }
}

export default Position