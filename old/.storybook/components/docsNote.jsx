import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '../../components';

function docsNote({ children, type, style, ...props }) {
  const { i18n } = useTranslation();
  const [status, setStatus] = useState({
    emoji: '',
    label: {
      en: '',
      ru: '',
    },
  });

  const note = {
    emoji: '🚸',
    label: {
      en: 'Note',
      ru: 'Заметка',
    },
  };

  const important = {
    emoji: '🚨',
    label: {
      en: 'Important',
      ru: 'Важно',
    },
  };

  useEffect(() => {
    switch (type) {
      case 'note':
        setStatus(note);
        break;
      case 'important':
        setStatus(important);
        break;
      default:
        setStatus(note);
        break;
    }
  }, [type]);

  return (
    <div style={{ ...style, padding: '16px 20px', background: '#E9E9E9', borderRadius: 10 }} {...props}>
      <Text variant="body1" style={{ margin: '0 0 4px' }}>
        {`${status.emoji} ${status.label[i18n.language]}`}
      </Text>
      <Text variant="body2">{children}</Text>
    </div>
  );
}

export default docsNote;
