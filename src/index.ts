import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { Token } from '@lumino/coreutils';

export const IProvider = new Token<string>(
  'provider:plugin'
);

/**
 * Initialization data for the provider extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'provider:plugin',
  provides: IProvider,
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension provider is activated!');
    return 'PROVIDER_STRING';
  }
};

export default extension;
