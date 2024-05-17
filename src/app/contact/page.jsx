import React from 'react'
import BaseLayout from '@/components/BaseLayout'
// import {useSendMessageMutation} from '../../services/frontendAPI'
import {MobileOutlined, WhatsAppOutlined} from '@ant-design/icons'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import openNotification from '@/components/Notification';
import Banner from '@/components/ContactBanner';
import ContactInfoDisplay from '@/components/ContactInfoDisplay';
import { Spin } from 'antd';
import FormUI from './FormUI';

const Contact = () => {
  return (
    <BaseLayout>
        <Banner />
        <ContactInfoDisplay/>
        <FormUI />
        
    </BaseLayout>
  )
}

export default Contact;