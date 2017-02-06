@extends("layout")

@section("konten")
Hello Laravel iam is {!!$nama!!}
Hello Laravel iam is {{$nama}}
Hello Laravel iam is <?php echo $nama; ?>
@foreach($data as $row)
<li>Saya {{$row['name']}}</li>
@endforeach

@stop

