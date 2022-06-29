import React from 'react'
import { FormControl } from 'baseui/form-control'
import { Input } from 'baseui/input'
import { LabelMedium } from 'baseui/typography'
import { FlexContainer } from 'components/layout/FlexContainer'
import { Spacer } from 'components/layout/Spacer'

export type Vector3InputValue = [number, number, number] 

export interface Vector3InputProps {
  label?: string,
  value?: Vector3InputValue
  onChange?: (newValue: Vector3InputValue) => void
  min?: Vector3InputValue
  max?: Vector3InputValue
}

export const Vector3Input = ({
  label,
  value = [0, 0, 0],
  onChange: handleChange,
  min,
  max,
}: Vector3InputProps) => {
  const onChangeHandlerFactory = (index: number) => (event: React.FormEvent<HTMLInputElement>) => {
    const newValue = value
    newValue[index] = +event.currentTarget.value
    handleChange?.(newValue)
  }

  return (
    <>
      {!!label && (
        <LabelMedium>
          {label}
        </LabelMedium>
      )}
      <FlexContainer>
        {['x', 'y', 'z'].map((coordinate, index, array) => {
          const isNotLast = index !== array.length - 1
          return (
            <React.Fragment key={coordinate}>
              <div>
                <FormControl label={() => coordinate}>
                  <Input
                    value={value[index]}
                    onChange={onChangeHandlerFactory(index)}
                    type="number"
                    min={min?.[index]}
                    max={max?.[index]}
                  />
                </FormControl>
              </div>
              {isNotLast && <Spacer />}
            </React.Fragment>
          )
        })}
      </FlexContainer>
    </>
  )
}
