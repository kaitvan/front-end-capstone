import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
// import activityData from '../../helpers/data/activityData';

const AddActivityForm = (props) => {
  const {
    buttonLabel,
    className,
  } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  // const addActivity = (e) => {
  //   const activityObject = {
  //     title: '',
  //     time: 0,
  //     category: '',
  //     uid: props.uid,
  //   };
  // };

  return (
    <div>
      <Button className='add-activity-btn' onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="title">Activity</Label>
              <Input type="text" name="title" id="title" placeholder="Add a title" />
            </FormGroup>
            <FormGroup>
              <Label for="time">How much time does this activity take?</Label>
              <Input type="select" name="time" id="time">
                <option value='1'>0-15 minutes</option>
                <option value='2'>15-30 minutes</option>
                <option value='3'>30-45 minutes</option>
                <option value='4'>45-60 minutes</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="category">Which category best fits this activity?</Label>
              <Input type="select" name="category" id="category">
                <option>Physical</option>
                <option>Social</option>
                <option>Emotional</option>
                <option>Creative</option>
                <option>Practical</option>
                <option>Spiritual</option>
                <option>Intellectual</option>
              </Input>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={toggle}>Add Activity</Button>{' '}
          <Button onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddActivityForm;