import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Fade from '@mui/material/Fade';
import { observer } from 'mobx-react-lite';
import { EditableTypography, LocaleSelector, useLocale } from 'react-stories-api';

import { disclaimerStore } from '../../../state/disclaimerStore';

const AppDisclaimer = observer(() => {
  const { t } = useLocale();
  const handleClose = () => {
    disclaimerStore.dismissDisclaimer();
  };
  return (
    <Dialog fullWidth maxWidth="sm" onClose={handleClose} open={disclaimerStore.showDisclaimer} slots={{ transition: Fade }}>
      <DialogContent>
        <LocaleSelector />
        <br />
        <EditableTypography
          disabled
          richText
          sx={{ a: { color: 'primary.main' } }}
          value={t('app.disclaimer.content')}
          variant="body1"
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          variant="text"
        >
          {t('button.close')}
        </Button>
      </DialogActions>
    </Dialog>
  );
});

export default AppDisclaimer;
