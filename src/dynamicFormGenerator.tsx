import React from 'react';
import Modal from './components/Modal';
import { QuestionItem } from './formGenerator/questionItem';

type Props = {

}

type NodeType = 'Container'|'Question';

// const conatinerTypes: string[] = ['conatiner-default'];

export class FormItemTreeNode {
    nodeType: NodeType = 'Container';
    value: Question = {type: '', id: ''}
    children: FormItemTreeNode[] = []

    constructor(nodeType: NodeType, value: Question) {
        this.nodeType = nodeType
        this.value = value;
        this.children = [];
    }

    toJson(): Object {
        return {
            nodeType: this.nodeType,
            value: this.value,
            descendants: this.children.map(d => d.toJson())
        }
    }

    addItem(parent: FormItemTreeNode|null, child: FormItemTreeNode) {
        if(parent === null || this.value.id === parent.value.id){
            this.children.push(child)
        }
        else {
            this.children.forEach(node => node.addItem(parent, child))
        }
    }
}

const DynamicFormGenerator = ({}: Props) => {

    const [show, setShow] = React.useState(true)
    const [form, setForm] = React.useState<FormItemTreeNode[]>([new FormItemTreeNode('Container', {type: '', id: ''})])
    const RootContainer = new FormItemTreeNode('Container', {type: 'conatiner-default', id: '11'});
    React.useEffect(()=>{
        setForm([RootContainer])
    }, [])


    const subCont1 = new FormItemTreeNode('Container', {type: 'conatiner-default', id: '12'});
    const q6 = new FormItemTreeNode('Question', {type: 'text', id: '6', label: '6.What is your name?'});
    const q1 = new FormItemTreeNode('Question', {type: 'text', id: '1', label: '1.What is your name?'});
    const q2 = new FormItemTreeNode('Question', {type: 'text', id: '2', label: '2.What is your name?'});
    const q3 = new FormItemTreeNode('Question', {type: 'text', id: '3', label: '3.What is your name?'});
    const q4 = new FormItemTreeNode('Question', {type: 'text', id: '4', label: '4.What is your name?'});
    const q5 = new FormItemTreeNode('Question', {type: 'text', id: '5', label: '5.What is your name?'});

    
    RootContainer.addItem(null, q1);
    RootContainer.addItem(null, q2);
    RootContainer.addItem(null, q3);
    RootContainer.addItem(null, subCont1);
    RootContainer.addItem(subCont1, q4);
    RootContainer.addItem(subCont1, q5);
    RootContainer.addItem(subCont1, q6)

    const addQuestion = (conatiner: FormItemTreeNode) => {
        const temp = new FormItemTreeNode('Question', {type: 'text', id: '5', label: '5.Whatxxx is your name?'});
        const tempRoot = form[0];
        tempRoot.addItem(conatiner, temp)
        setForm([tempRoot])
    }

    const containerRender = (structure: FormItemTreeNode | FormItemTreeNode[]) => {
        return structure && Array.isArray(structure) ? structure.map( item => {
            if(item.nodeType === 'Container') {
                return (
                    <div className="df-generator-form-container">
                        <div className="df-generator-form-add-container">
                            <div className="df-generator-form-add" onClick={()=>addQuestion(item)}><span>+</span></div>
                        </div>
                        {item.children && containerRender(item.children)}
                    </div>
                )
            }
            else {
                return <QuestionItem question={item.value} />
            }
        })
        : <div>Empty</div>
    }

    return (
        <div className="df-generator-wrapper">
            <Modal show={show} onClose={()=>{setShow(false)}}>string</Modal>
            {containerRender(form)}
        </div>
    );
}

export { DynamicFormGenerator };