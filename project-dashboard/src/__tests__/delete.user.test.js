import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import DeleteUser, {sendDelete} from '../models/read.user';
import Config from '../config/config';
import Adapter from "enzyme-adapter-react-16";
import Swal from 'sweetalert2/dist/sweetalert2.js'
Enzyme.configure({adapter:new Adapter()});
import * as axios from 'axios';

describe("create.user component", () => {
    test("renders", () => {
      const wrapper = shallow(<DeleteUser />);
      //expect(wrapper.exists()).toBe(true);
      expect(wrapper).toMatchSnapshot();
    });

    it('calls Swal', () => {
        const axios = require('axios');
        const deleteUser = shallow(<DeleteUser />);
        const url = Config.baseUrl+"/users/"+'id'
        deleteUser
        .instance()
        .sendDelete()
        .then(() => {
          expect(axios.delete).toHaveBeenCalled();
          expect(axios.delete).toHaveBeenCalledWith(url);
          expect(Swal.fire).toHaveBeenCalledTimes(0);
          sendDelete();
          expect(Swal.fire).toHaveBeenCalledTimes(1);
          loadUser();
        });
    });
});
