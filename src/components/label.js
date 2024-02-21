const renderLabel = (props: {

    focused: boolean;
    color: string;
    children: string;
}) =>
 props.focused ? (
    <Text style={[styles.labelStyle, {color: props.color}]}>
        {props.children}
    </Text>
 ): null;
