import styled from 'styled-components'

export const Input = styled.input`
  padding: .6em 1em;
  display: inline-block;
  border-radius: 4px;
  border: 1px solid var(--primary-color);
  background-color: var(--background-color);
  color: var(--text-dark);
  font-size: .9rem;
  transition: border .3s ease-in-out;

  &:focus {
    outline: none;
    background-color: var(--light-grey);
  }
`

export const SmallInput = styled(Input)`
  max-width: 60%;
`

export const HidePassword = styled(Input)`
  transition: background-color .2s, outline .2s;
  user-select: none;

  &:focus {
    outline: none;
    background-color: #282828;
  }
`

export const NoStyleInput = styled(Input)`
  border: unset;
  padding: 0.5em;
  margin: 0;
  background-color: unset;
  width: 100%;
  color: white;
  transition: background-color .3s;
  background: linear-gradient(transparent, rgba(255,255,255,0.03));

  &:hover {
    background: linear-gradient(transparent, rgba(255,255,255,0.05));
  }
  
  &:focus {
    outline: none;
    background-color: #282828;
  }
`

export const Select = styled.select`
  width: 100%;
  padding: .5em 1em;
  margin: .5em 0;
  display: inline-block;
  border-radius: 4px;
  border: 1px solid var(--primary-color);
  background-color: var(--background-color);
  color: white;
  transition: border .3s ease-in-out;

  &:focus {
    outline: none;
    background-color: #282828;
  }
`

export const Textarea = styled.textarea`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  min-height: 6em;
  display: inline-block;
  border-radius: 4px;
  box-sizing: border-box;
  border: 2px solid var(--primary-color);
  background-color: var(--background-color);
  color: white;
  resize: vertical;
  transition: background-color .3s;

  &:focus {
    outline: none;
    background-color: #282828;
  }
`

export const Alink = styled.a`
  color: white;
  text-decoration: none;
  transition: background-color .4s;

  &:focus {
    outline: none;
    background-color: #282828;
  }
`

export const Label = styled.label`
  margin-right: .7vw;
`

export const Button = styled.button`
  position: relative;
  color: var(--text-dark);
  padding: .5em 1em;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 16px;
  cursor: pointer;
  background-color: transparent;
  border: 2px solid var(--primary-color);
  border-radius: .2em;
  margin: 1rem auto;
  z-index: 2;
  outline: unset;
  transition:
    background-color .2s linear,
    box-shadow .2s ease-in-out;

  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    opacity: 0;
    transition:
      top .25s cubic-bezier(0.25, .9, 1, 1),
      left .25s cubic-bezier(0.25, .9, 1, 1),
      width .25s cubic-bezier(0.25, .9, 1, 1),
      height .25s cubic-bezier(0.25, .9, 1, 1),
      opacity .15s cubic-bezier(0.2, .9, .8, 1);
    background-color: var(--primary-color);
  }

  &:hover::before,
  &:focus::before {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
  }
`

export const SecondaryButton = styled(Button)`
  border: 2px solid var(--secondary-color);
  box-shadow: .3em .3em var(--secondary-color);

  &:focus {
    background-color: var(--secondary-color);
    box-shadow: .3em .3em var(--secondary-color);
  }

  &:hover {
    background-color: var(--secondary-color);
    box-shadow: 0 0 var(--secondary-color);
  }
`

export const LeftButton = styled(Button)`
  margin: 1rem 0;
`

export const RightButton = styled(Button)`
  margin: 1rem 0 1rem auto;
`

export const WarningButton = styled(Button)`
  background-color: black;
  border-color: red;
  box-shadow: .3em .3em red;

  &:focus {
    background-color: red;
    box-shadow: .3em .3em red;
  }

  &:hover {
    background-color: red;
    box-shadow: 0 0 red;
  }
`