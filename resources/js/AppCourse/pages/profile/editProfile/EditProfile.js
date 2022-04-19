import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'react-spinner-material';
import Select from 'react-select';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import MesIformationsCompoment from './mesIformationsCompoment';
import ChangeMotDePasseCompoment from './changeMotDePasseCompoment';
import SuppressionCompteCompoment from './suppressionCompteCompoment';
import ChangeProfileImage from './changeProfileImage';
import { Alert, Button, SnackbarContent } from '@mui/material';



export default function EditProfile() {
    const { email_verified_at, has_password } = useSelector(state => state.user.profile);
    const action = (
        <Button color="secondary" size="small">
            envoyer un mail de vérification
        </Button>
    );
    return (<>
        <div className="flex flex-col h-full w-full mb-3">
            {email_verified_at ? null : <Alert severity="warning" action={action}>Votre compte est non soumis à vérification s'il vous plaît vérifier.</Alert>}
            {has_password ? null : <Alert severity="warning">ce compte n'a pas de mot de passe sur notre site Merci de le remplir !</Alert>}
        </div>
        <ChangeProfileImage />
        <MesIformationsCompoment />
        <ChangeMotDePasseCompoment />
        <SuppressionCompteCompoment />
    </>)
}
