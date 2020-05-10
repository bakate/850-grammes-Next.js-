import { Box, FormControl, FormLabel, Icon, Input, InputGroup, InputLeftAddon, Textarea } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const FormTemplate = ({
  iconName,
  iconColor,
  label,
  type,
  value,
  onChange,
  txtArea,
  placeholder,
  tareaPlaceholder,
}) => (
  <Box>
    <FormControl isRequired>
      <FormLabel
        htmlFor={`${label.toLowerCase()}`}
        mt={{ base: '0', md: '1' }}
      >{`${label}:`}</FormLabel>
      {!txtArea && (
        <InputGroup>
          <InputLeftAddon>
            <Icon name={iconName} color={iconColor} />
          </InputLeftAddon>
          <Input
            aria-label={`${label} input field`}
            variant="outline"
            id={`${label}`}
            name={`${label.toLowerCase()}`}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </InputGroup>
      )}

      {txtArea && <Textarea placeholder={tareaPlaceholder} />}
    </FormControl>
  </Box>
);

FormTemplate.defaultProps = {
  type: 'text',
  iconColor: 'orange.300',
};

FormTemplate.propTypes = {
  iconColor: PropTypes.string,
  iconName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  tareaPlaceholder: PropTypes.string,
  txtArea: PropTypes.bool,
};

export default FormTemplate;
