import React from 'react'
import { createRoot } from 'react-dom/client';
import FormWithMultipleSteps from './Form/components/FormWithMultipleSteps'
import './styles/tailwind.css'
import './styles/index.css'

const root = createRoot(document.getElementById("root")!);
root.render(<FormWithMultipleSteps />);
